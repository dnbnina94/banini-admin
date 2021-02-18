import React from 'react';
import { connect } from "react-redux";
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DialogComponent from "./DialogComponent";
import { formatMillisecs } from '../utils/utils';
import {deleteEntries} from "../redux/actions/entries";

class Entries extends React.Component {
    state = {
        columns: [
          {field: 'col1', headerName: 'Ime', width: 150},
          {field: 'col2', headerName: 'Prezime', width: 150},
          {field: 'col3', headerName: 'Email', width: 300},
          {field: 'col4', headerName: 'Telefon', width: 150},
          {field: 'col5', headerName: 'Br. fiskalnog isečka', width: 200},
          {field: 'col6', headerName: 'Vreme', width: 150}
        ],
        rows: [],
        selected: [],
        alertOpened: false
    }

    componentDidMount() {
      this.setRows();
    }
    
    setRows = () => {
      this.setState(() => ({
        rows: this.props.entries.map((e,i) => {
          return {
            id: e.id,
            col1: e.ime,
            col2: e.prezime,
            col3: e.email,
            col4: e.telefon,
            col5: e.brisecka,
            col6: formatMillisecs(e.vreme)
          }
        })
      }));
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.entries !== this.props.entries) {
        this.setState(() => ({selected: []}));
        this.setRows();
      }
    }

    selectionChange = (newSelection) => {
      this.setState(() => ({
        selected: newSelection.rowIds
      }))
    }

    startDeleteRows = () => {
      this.setState(() => ({ alertOpened: true }))
    }

    proceedDelete = () => {
      this.setState(() => ({ alertOpened: false }));
      this.props.deleteEntries(this.state.selected);
    }

    cancelDelete = () => {
      this.setState(() => ({ alertOpened: false }));
    }

    render() {
        return (
            <div>
                <div className="text-center mt-4">
                {
                    this.props.entries.length !== 0 ?
                    <div>
                      <DialogComponent 
                        opened={this.state.alertOpened} 
                        numOfSelected={this.state.selected.length}
                        proceedDelete={this.proceedDelete}
                        cancelDelete={this.cancelDelete}
                      />
                      <Toolbar>
                        <Typography variant="h6" id="tableTitle" component="div">
                          Validni učesnici
                        </Typography>
                        {
                          this.state.selected.length > 0 &&
                          <Tooltip title="Delete">
                            <IconButton aria-label="delete" onClick={this.startDeleteRows}>
                              <DeleteIcon/>
                            </IconButton>
                          </Tooltip>
                        }
                      </Toolbar>
                      <DataGrid 
                        rows={this.state.rows} 
                        columns={this.state.columns} 
                        autoHeight={true}
                        checkboxSelection={true} 
                        pageSize={20}
                        onSelectionChange={this.selectionChange}
                      />
                    </div>
                    :
                    <p>Nema učesnika za selektovane kriterijume.</p>
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.entries.page,
    perPage: state.entries.perPage,
    date: state.filters.date,
});

const mapDispatchToProps = (dispatch) => ({
    deleteEntries: (ids) => dispatch(deleteEntries(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(Entries);