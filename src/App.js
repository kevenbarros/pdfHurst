import { PDFDownloadLink } from '@react-pdf/renderer';
import Extract from './extract'


function download() {
  setTimeout(function () {
    let id = document.getElementById('click')
    if (id) {
      id.click()
    }
  }, 1000);

  return 'download'
}
function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<Extract></Extract>} fileName="extract.pdf">
        {({ blob, url, loading, error }) => (
          loading ? <button>preparando</button> : <a id="click">{download()}</a>
        )}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
