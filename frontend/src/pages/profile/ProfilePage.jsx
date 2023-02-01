import React from "react";
import NavBar from "../../components/spacefeed/spacefeed/navbar/NavBar";
import { Box, Grid } from "@mui/material/";
import ProfileSection from "./components/profile/ProfileSection";
import SuggestionSection from "./components/suggestion/SuggestionSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../states/slices/loadingSlice";
import { showError } from "../../states/slices/notificationSlice";
import { setProfileUser } from "../../states/slices/userSlice";
import { useEffect } from "react";

const ProfilePage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const profileUser = useSelector((state) => state.user.profileUser);

  const getUserDetails = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/user/${id}`);
      const user = response.data.user;
      dispatch(setProfileUser(user));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(showError(err.response.data.error));
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [id]);

  return (
    profileUser && (
      <div>
        <NavBar />
        <Box style={{ padding: "20px 10px" }}>
          <Grid container spacing={{ xs: 0, md: 2 }}>
            <Grid
              item
              md={8}
              xs={12}
              sx={{ display: { xs: "block", md: "block" } }}
            >
              <ProfileSection />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box>
                <SuggestionSection />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  );
};

export default ProfilePage;
