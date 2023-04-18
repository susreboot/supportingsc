import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MyCard = ({ image, title, content }) => { // add title and content props
    return (
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Image title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} {/* use title prop */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content} {/* use content prop */}
          </Typography>
        </CardContent>
      </Card>
    );
  };