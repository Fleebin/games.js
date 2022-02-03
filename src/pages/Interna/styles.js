import { makeStyles } from '@material-ui/styles';
import { fontWeight } from '@mui/system';

export const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexDirection: 'row',
        background: '#ffffff',
        boxShadow: '0px 0px 36.2295px rgba(54, 57, 83, 0.2)',
        borderRadius: '6px',
        padding: '50px',
        marginTop: '150px',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        height: '250px',
        width: '200px',
        marginRight: '50px'
    },
    title: {
        fontSize: '30px',
        fontWeight: '700',
    },
    span: {
        backgroundColor: '#fc933e',
        color: '#fff',
        fontSize: '40px',
        fontWeight: '600',
        textAlign: 'center',
        padding: '5px',
        borderRadius: '6px',
        maxWidth: '50px'
    }
});