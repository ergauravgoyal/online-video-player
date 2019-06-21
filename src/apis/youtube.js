import axios from 'axios';

const KEY = 'AIzaSyB-Y0np6umKZ2lH8DXaA-N1j-tLBZCxVfM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})