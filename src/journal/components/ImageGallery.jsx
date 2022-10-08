import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: '100%', height: 460 }} cols={4} rowHeight={200}>
      {images.map(url => (
        <ImageListItem key={url}>
          <img
            src={`${url}?w=164&h=164&fit=crop&auto=format`}
            alt="note's image"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
