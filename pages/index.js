import MeetupList from '@/components/meetups/MeetupList';
import { useState, useEffect } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://2.bp.blogspot.com/-OC1s_ICHPrg/Vls-Kg9TGLI/AAAAAAAACCY/MJECkkEZuLc/s1600/Barcelona.jpg',
    address: 'Some address, 12345, here street',
    description: 'THis is a first meetup',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://2.bp.blogspot.com/-OC1s_ICHPrg/Vls-Kg9TGLI/AAAAAAAACCY/MJECkkEZuLc/s1600/Barcelona.jpg',
    address: 'Some address, 12345, here street',
    description: 'THis is a second meetup',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image:
      'https://2.bp.blogspot.com/-OC1s_ICHPrg/Vls-Kg9TGLI/AAAAAAAACCY/MJECkkEZuLc/s1600/Barcelona.jpg',
    address: 'Some address, 12345, here street',
    description: 'THis is a third meetup',
  },
];

const HomePage = (props) => {
  //No longer need to manage state or useEffect to make the API call - this is now handled with getStaticProps
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // Send an http request to get the meetups from the backend

  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
};

//THis is used for pre-rendering when we need to call up some data and
//don't want the initial page that next renders which wont have the data
//getStaticProps() job is to prepare props - it can be async - The code here will never be on the client side
//Now the data will be in the pre-rendered code and it's good for SEO - This is data fetching for pre-rendering
export async function getStaticProps() {
  //fetch data from an api
  //You always need a return object and you need the props property as shown below
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //*** IMPORTANT *** This will help with changing/updating data (now you don't have to rebuid and redeploy)
    // -THis page is set to update at 10 seconds -But what if we want to do it dynamically (on request)
  };
}

// This code only runs on the server - this is the dynamic way and runs on incoming requests
// Use this when you need access to the request object
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
