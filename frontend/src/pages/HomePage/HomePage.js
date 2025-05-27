import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import Banner from '../../components/Banner/Banner';
import BookList from '../../components/BookList/BookList';
// import FeedbackSection from './components/FeedbackSection';

function HomePage() {
    return (
        <Box sx={{ bgcolor: '#fafafa' }}>
            <Banner />
            <Container sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom>📚 Sách Mới Nhất</Typography>
                <BookList category="new" />

                <Typography variant="h4" sx={{ mt: 6 }} gutterBottom>🔥 Sách Bán Chạy</Typography>
                <BookList category="bestseller" />

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button variant="contained" href="/shop">Xem thêm sách</Button>
                </Box>

                {/* <FeedbackSection /> */}
            </Container>
        </Box>
    );
};

export default HomePage;
