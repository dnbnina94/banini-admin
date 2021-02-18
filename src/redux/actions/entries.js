import { v4 as uuidv4 } from 'uuid';
import firebase, { database } from "../../firebase/firebase";
import { startLoading, stopLoading } from '../actions/ui';
import { setDisqual } from './filters';

export const addEntry = (entry) => ({
    type: 'ADD_ENTRY',
    entry
})

export const setEntries = (entries) => ({
    type: 'SET_ENTRIES',
    entries
})

export const startSetEntries = () => {
    return (dispatch, getState) => {
        const date = getState().filters.date;
        const disqual = getState().filters.disqual;

        let minDate = new Date(date);
        minDate.setHours(0);
        minDate.setMinutes(0);
        minDate.setSeconds(0);
        minDate.setMilliseconds(0);

        let maxDate = new Date(date);
        maxDate.setHours(23);
        maxDate.setMinutes(59);
        maxDate.setSeconds(59);
        maxDate.setMilliseconds(999);

        minDate = firebase.firestore.Timestamp.fromDate(minDate);
        maxDate = firebase.firestore.Timestamp.fromDate(maxDate);

        let query = database.collection('entries')
        .where('validan', '==', true)
        .where('datum', '>=', minDate)
        .where('datum', '<=', maxDate);

        // if (disqual) {
        //     query = query
        //     .where('diskvalifikovan', '==', disqual == 1 ? true : false);
        // }

        dispatch(startLoading());
        
        return query
        .get()
        .then(snapshot => {
            const entries = [];

            snapshot.forEach(snapshotChild => {
                entries.push({
                    ...snapshotChild.data(),
                    id: snapshotChild.id
                })
            });

            entries.sort((a,b) => a.vreme - b.vreme);

            dispatch(stopLoading());
            dispatch(setEntries(entries));
            dispatch(setPage(0));
            dispatch(setDisqual(0));
        })
        .catch(err => {
            dispatch(stopLoading());
            console.log('err', err);
        });
    }
}

export const deleteEntries = (ids) => {
    return (dispatch, getState) => {
        let promises = ids.map(id => {
            return database.collection('entries').doc(id).update({
                validan: false
            });
        });

        dispatch(startLoading());

        Promise.all(promises)
        .then(() => {
            dispatch(startSetEntries());
        })
        .catch((err) => {
            dispatch(stopLoading());
            console.log('err', err);
        })
    }
}

export const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        page: page
    }
}