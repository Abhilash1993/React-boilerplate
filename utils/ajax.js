import $ from 'jquery';
function getData(url) {
  return new Promise((resolve, reject)=>{
    $.ajax({
      url: url,
      success: (data)=> {
        resolve(data);
      },
      error: (error)=> {
        reject(error);
      }
    });
  });
}
function postData(url, data) {
  return new Promise((resolve, reject)=>{
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: (data)=> {
        resolve(data);
      },
      error: (error)=> {
        reject(error);
      }
    });
  }); 
}
export {
  getData,
  postData
};