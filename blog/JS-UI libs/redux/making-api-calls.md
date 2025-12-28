HANDLING API CALLS

You can create a series of “api” methods –  

import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
 
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

Then… if someone calls this.searchGiphy, passing in data : 

import API from "../utils/API";

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };
