/*Title Regulator*/
const titles = {
    bannerTitle: {
        textShadow: '#C585B3 0 0 20px',
    }

}


/*Fetch HTTP Cat API*/
const url = 'https://http.cat/[status_code]';

/* Get status */
async function getStatus() {
  try {
    const statusNum = response.status;
    console.log('Status:', statusNum);
    return statusNum;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

/* Check status for Error */
async function checker() {
  const status = await getStatus();
  if (status != 200) {
    //Display the cat image
    for (let x = 100; x < 600; x++){
        if (x === status){
            console.log(`Error: HTTP Status ${status}`);
            const img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);
        }
        else{
            console.log('Error')
        }
    }

}
}

checker(); // Call the checker function to initiate the process.
