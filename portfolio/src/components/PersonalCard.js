import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 const PersonalCard = (props) => {

    return (
        <div style={{ display: 'inline-block', margin: 10 }}>
            <Card raised={true} style={{ maxWidth: 500, maxHeight: 800, borderRadius: '15px'}}>
                <CardActionArea>
                    <img src={ require('./../photo.png') } alt="marcos bustamante mateo logo" style={{ maxHeight: 150, borderRadius: '50%', marginTop: 10 }} />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Marcos Bustamante Mateo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ textIndent: '1em' }}>
                        I am Software developer. Based in Spain with a great focus on creating clean & user friendly code. <br/>
                        Let me show you more about me.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PersonalCard;