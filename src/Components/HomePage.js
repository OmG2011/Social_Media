import React from 'react';
import '../Styles/HomePage.css'
import StoryCard from './StoryCard';
import Tags from './Tags';
import Post from './Post';
import WhoToFollow from './WhoToFollow';

function HomePage() {
  return (
    <div className='main_div container-fluid px-5 py-3'>
      <div className='row h-100 px-5 m-0'>

        <div className='section-1 col-0 col-lg-3 m-0 p-3'>
          <div className='section-1-inner-div p-3'>
            <div className='banner-img-div'>
              <img className='banner-img' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt="" />
            </div>
            <div className='d-flex justify-content-center'>
              <div className='profile-pic-div'>
                <img className='profile-pic' src='https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png' alt="" />
              </div>
            </div>
            <h4 className='name'>Sam Lanson</h4>
            <p>Web Developer at Webestica</p>
            <p className='tagline'>I'd love to change the world, but they won’t give me the source code.</p>
            <div className='user-stats row m-0 p-0'>
              <div className='col-3 m-0 p-0 d-flex'>
                <h5 className='w-100'>256 <br /> <span>Post</span></h5>
                <div className='vl m-0 p-0'></div>
              </div>
              <div className='col-5 m-0 p-0 d-flex'>
                <h5>2.5K <span>Followers</span></h5>
                <div className='vl m-0 p-0'></div>
              </div>
              <div className='col-4 m-0 p-0'>
                <h5>365 <span>Following</span></h5>
              </div>
            </div>

            <hr />

            <div className='px-2' style={{ textAlign: 'left' }}>
              <p><i className="bi bi-house-fill me-3"></i>Feed</p>
              <p><i className="bi bi-person-fill me-3"></i>Connections</p>
              <p><i className="bi bi-globe-americas me-3"></i>Latest News</p>
              <p><i className="bi bi-calendar-event-fill me-3"></i>Events</p>
              <p><i className="bi bi-wechat me-3"></i>Groups</p>
              <p><i className="bi bi-bell-fill me-3"></i>Notifications</p>
              <p><i className="bi bi-gear-fill me-3"></i>Settings</p>
            </div>

            <hr />

            <a href=''>View Profile</a>
          </div>
        </div>

        <div className='section-2 col-12 col-lg-6 m-0 p-3'>
          <div className='section-2-story-row row'>
            <div className='col-3'>
              <div className='create-story py-4'>
                <h1><i className="bi bi-plus-circle-fill"></i></h1>
                <p>Post a Story</p>
              </div>

            </div>
            <div className='story col-9'>

              <StoryCard imgUrl='https://social.webestica.com/assets/images/post/1by1/02.jpg' name="Judy Nguyen" />
              <StoryCard imgUrl='https://social.webestica.com/assets/images/post/1by1/02.jpg' name="Judy Nguyen" />
              <StoryCard imgUrl='https://social.webestica.com/assets/images/post/1by1/02.jpg' name="Judy Nguyen" />
              <StoryCard imgUrl='https://social.webestica.com/assets/images/post/1by1/02.jpg' name="Judy Nguyen" />

            </div>
          </div>

          <div style={{ borderRadius: '10px', backgroundColor: 'white' }}>
            <div className='add-post mt-5 d-flex justify-content-start p-2'>
              <img className='me-2' src='https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png' alt="" style={{ width: '7%', borderRadius: '50%' }} />
              <input className='w-100' type='text' placeholder='Share your thoughts...' />
            </div>
            <div className='p-2 d-flex align-items-end m-0'>
              <Tags icon="bi bi-image-fill me-1" tagName="Photo" />
              <Tags icon="bi bi-camera-reels-fill me-1" tagName="Video" />
              <Tags icon="bi bi-calendar3-event-fill me-1" tagName="Event" />
              <Tags icon="bi bi-emoji-smile-fill me-1" tagName="Feelings/Activity" />
            </div>
          </div>

          <div>
            <Post name="Lori Ferguson" time="2hr" profileImgSrc="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png" tagline="Web Developer at Webestica" content="I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll." contentImgSrc="https://social.webestica.com/assets/images/post/3by2/01.jpg" likes="56" comments="12" shares="3" />
            <Post name="Judy Nguyen" time="" profileImgSrc="https://social.webestica.com/assets/images/avatar/04.jpg" tagline="Web Developer at Webestica" content="I'm so privileged to be involved in the @bootstrap hiring process! Interviewing with their team was fun and I hope this can be a valuable resource for folks! #inclusivebusiness #internship #hiring #apply" contentImgSrc="https://social.webestica.com/assets/images/post/1by1/03.jpg" likes="129" comments="12" shares="3" />
          </div>
        </div>

        <div className='section-3 col-0 col-lg-3 m-0 p-3'>
          <div className=' bg-white m-0 p-3 mb-4' style={{ borderRadius: '10px', textAlign: 'left', maxHeight: '40vh', overflowY: 'autox', overflowX: 'hidden' }}>
            <h4 className='mb-3'>Who to follow</h4>
            <WhoToFollow imgSrc='https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png' name="Judy Nguyen" job="News Anchor" />
            <WhoToFollow imgSrc='https://social.webestica.com/assets/images/avatar/05.jpg' name="Amanda Reed" job="Web Developer" />
          </div>

          <div className=' bg-white m-0 p-3' style={{ borderRadius: '10px', textAlign: 'left', maxHeight: '40vh', overflowY: 'autox', overflowX: 'hidden' }}>
            <h4 className='mb-3'>Today's News</h4>
            <div>
              <p className='m-0 p-0' style={{ fontSize: '18px', fontWeight: 'bold' }}>Ten questions you should answer truthfully</p>
              <p className='m-0 p-0'>2hrs</p>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;