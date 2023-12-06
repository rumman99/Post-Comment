import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const {title, body, id}= props.post;

    return (
        <div className='flex justify-center mt-6'>
            <Card sx={{ maxWidth: 745 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image='https://random.imagecdn.app/500/150'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" className='text-red-600'>
                {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`postdetail/${id}`}><Button size="small">See More</Button></Link>
            </CardActions>
            </Card>
        </div>
    );
};

export default Posts;