import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image={
        'https://2.bp.blogspot.com/-OC1s_ICHPrg/Vls-Kg9TGLI/AAAAAAAACCY/MJECkkEZuLc/s1600/Barcelona.jpg'
      }
      title="Let's Party"
      description="Gonna set the town on fire tonight!"
      address="what ever 1234 here St"
    />
  );
};

//THis means that nextjs must pre-generate all versions of the dynamic page - Remeber that this is in the [meetupId] folder
// THis returns an object that describes all the dynamic segment values
export async function getStaticPaths() {
  return {
    fallback: false, //If you set false then all supported paths are accounted for in the following params - true is the opposite
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: 'm1',
        image:
          'https://2.bp.blogspot.com/-OC1s_ICHPrg/Vls-Kg9TGLI/AAAAAAAACCY/MJECkkEZuLc/s1600/Barcelona.jpg',
        title: 'Lets Party',
        address: 'what ever 1234 here St',
        description: 'Gonna set the town on fire tonight!',
      },
    },
  };
}
export default MeetupDetails;
