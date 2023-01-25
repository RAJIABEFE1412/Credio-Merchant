import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs";
import { FaEnvelopeOpenText, FaKey } from "react-icons/fa";
import { FiCopy, FiChevronRight } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoCreditCard } from "react-icons/go";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../../Redux";
import { buttonScan, DisConnect, init } from "../../Redux/Card/CardScript";
import "./Profile.css";
const Profile = ({
  profileData,
  cardData,
  fetchProfile,
  init,
  cardScan,
  disconnect,
}) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  useEffect(() => {
    init();
    fetchProfile();
  }, []);
  // const {data: profile, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
  return (
    <div className="profile">
      <Navbar openSidebar={toggleSidebar} />
      <div className="app-container">
        <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} />
        <div className="body">
          <div className="deposit-title">
            <div className="back"></div>
            <p className="profile-text">Profile</p>
            <Link to="/profileform">
              <p className="profile-edit profile-edit-mobile">Edit</p>
            </Link>
          </div>
          {/* {ispending && <div>loading.....</div>}
                        {error && <div>{error}</div>}
                        */}
          {profileData && profileData?.profile && (
            <div className="profile-body">
              {/* key={key} */}
              <div className="profile-header">
                <div className="profile-header-inner">
                  <div className="profile-image-con">
                    <img
                      className="profile-image"
                      src={
                        profileData?.profile?.message?.profile
                          ?.profilePicture ?? "********"
                      }
                    ></img>
                  </div>
                  <Link to="/profileform">
                    <p className="profile-edit">Edit</p>
                  </Link>
                  <p className="profile-name">
                    {profileData?.profile?.message?.profile?.bvn?.firstName ??
                      "************"}{" "}
                    {profileData?.profile?.message?.profile?.bvn?.lastName ??
                      "************"}
                  </p>
                  <p className="profile-location">
                    21 liter rd, Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="profile-vault">
                <div className="profile-vault-left">
                  <p className="vault-title">Vault Number</p>
                  <p className="vault-number">
                    {profileData?.profile?.message?.profile?.vaults
                      ?.accountNumber ?? "************"}
                  </p>
                </div>
                <div className="profile-vault-right">
                  <FiCopy />
                </div>
              </div>
              <div className="profile-subbody">
                <div className="manage">
                  <div className="manage-left">
                    <div className="manage-icon-outer">
                      <div className="manage-icon">
                        <BsBriefcaseFill />
                      </div>
                    </div>
                    <p className="manage-text">Third Party Account</p>
                  </div>
                  <div className="manage-right">
                    <FiChevronRight />
                  </div>
                </div>
                <div className="change">
                  <div className="manage-left">
                    <div className="change-icon-outer">
                      <div className="change-icon">
                        <FaKey />
                      </div>
                    </div>
                    <p className="change-text">Change app pin</p>
                  </div>
                  <div className="manage-right">
                    <FiChevronRight />
                  </div>
                </div>
                <div
                  className="manage"
                  onClick={() => {
                    cardData.connected ? disconnect() : cardScan();
                  }}
                >
                  <div className="manage-left">
                    <div className="manage-icon-outer">
                      <div className="manage-icon">
                        <GoCreditCard />
                      </div>
                    </div>
                    <p className="manage-text">
                      {cardData.connected
                        ? "Deactivate Credio Reader"
                        : "Activate Credio Reader"}
                    </p>
                  </div>
                  <div className="manage-right">
                    <FiChevronRight />
                  </div>
                </div>
                <div className="invite">
                  <div className="manage-left">
                    <div className="invite-icon-outer">
                      <div className="invite-icon">
                        <FaEnvelopeOpenText />
                      </div>
                    </div>
                    <p className="invite-text">invite a friend</p>
                  </div>
                  <div className="manage-right">
                    <FiChevronRight />
                  </div>
                </div>
                <div className="manage">
                  <div className="manage-left">
                    <div className="manage-icon-outer">
                      <div className="manage-icon">
                        <TfiHeadphoneAlt />
                      </div>
                    </div>
                    <p className="manage-text">Chat with us</p>
                  </div>
                  <div className="manage-right">
                    <FiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => {
  console.log("states   ", state);
  return {
    profileData: state.profile,
    cardData: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => dispatch(fetchProfile()),

    cardScan: () => {
      dispatch(buttonScan());
    },
    init: () => {
      dispatch(init());
    },
    disconnect: () => {
      dispatch(DisConnect());
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Profile);
