import Axios from "axios";




//returns action object and returning of data with actions
export const fetchPosts = () => {
   return async (dispatch, getState) => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/post"
    );
    console.log(response.data)

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
};
}

// the api call needs some time to process , so we use async await
//  const promise = await Axios.get('https://ergon-ms-gixholtv4q-df.a.run.app/api/bountyAd');

//   return {
//        type: 'FETCH_POSTS',
//      payload: promise,
//    };
//}
