import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function BookList({ books }) {
    if (!Array.isArray(books)) {
        return <p>Không có dữ liệu sách để hiển thị.</p>;
    }

    return (
        <Grid container spacing={3}>
            {books.map(book => (
                <Grid item xs={12} sm={6} md={4} key={book.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="240"
                            image={book.image_url}
                            alt={book.product_name}
                        />
                        <CardContent>
                            <Typography variant="h6">{book.product_name}</Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                Tác giả: {book.brand}
                            </Typography>
                            <Typography color="primary">
                                Giá: {book.discounted_price?.toLocaleString()}đ
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default BookList;