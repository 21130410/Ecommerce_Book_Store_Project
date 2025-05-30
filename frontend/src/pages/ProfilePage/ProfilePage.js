import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    Grid,
    Container,
} from "@mui/material";
import './ProfilePage.css';

function ProfilePage() {
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("john@example.com");
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setAvatar(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleSaveChanges = () => {
        // Logic to save changes
        console.log("Changes saved:", { name, email, avatar });
    };

    return (
        <Container className="profile-container">
            <Box>
                <Typography variant="h4" gutterBottom className="profile-title">
                    Profile
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="profile-subtitle">
                    Cập nhật thông tin.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Họ và tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div className="avatar-upload">
                            <Avatar src={avatar} alt="Avatar" sx={{ width: 56, height: 56 }} />
                            <Button variant="contained" component="label">
                                Upload Avatar
                                <input type="file" hidden onChange={handleAvatarChange} />
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSaveChanges}
                            className="save-button"
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default ProfilePage;
