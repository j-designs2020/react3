import MeetupList from '../components/meetups/MeetupList'



const DUMMY_DATA = [ 
    {
        id: 'm1',
        title: 'Meet the bobes',
        image: process.env.PUBLIC_URL + 'images/buddy.jpeg',
        address: 'apt 12, the raft',
        description: 'all hail king bobos'
    },
    {
        id: 'm2',
        title: 'here is el snorte',
        image: process.env.PUBLIC_URL + '/images/charley.jpeg',
        address: 'scheer drive',
        description: 'what a good boy'
    },
    {
        id: 'm3',
        title: 'tique tique',
        image: process.env.PUBLIC_URL + '/images/tiki.jpg',
        address: 'apt 12, backroom',
        description: 'how bout that rat'
    },
    {
        id: 'm4',
        title: 'suh-brown-browns',
        image: process.env.PUBLIC_URL + '/images/brownie.jpg',
        address: 'apt 12, her couch',
        description: 'we love the youngling'
    }

]

const AllMeetupsPage = () => {
    return (
       <section> 
           <h1> All Pets </h1> 
           <MeetupList meetups={DUMMY_DATA} />
       </section>
    )
}

export default AllMeetupsPage
