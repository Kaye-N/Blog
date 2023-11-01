/*Title Regulator*/
const titles = {
    bannerTitle: {
        textShadow: '#C585B3 0 0 20px',
    }

}

const url = 'https://http.cat/[status_code]';

/* Get status */
async function getStatus() {
  try {
    const response = await fetch(url);
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
  if (status === 200) {
    // Successful, display the cat image
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  } else {
    // Error occurred
    console.log(`Error: HTTP Status ${status}`);
  }
}

checker(); // Call the checker function to initiate the process.
