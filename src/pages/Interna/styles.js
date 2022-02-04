import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#ffffff',
        boxShadow: '0px 0px 36.2295px rgba(54, 57, 83, 0.2)',
        borderRadius: '6px',
        padding: '50px',
        marginTop: '150px',
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        height: '450px',
        width: '450px',
        marginRight: '50px',
        borderRadius: '5px'
    },
    title: {
        fontSize: '42px',
        color: '#363953',
    },
    sub: {
        fontSize: '24px',
        color: ' #363953',
        fontWeight: '500',
        marginBottom: '15px',
        marginTop: '15px',
    }
});