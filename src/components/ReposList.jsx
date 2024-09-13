import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function ReposList(args) {
    
    const handleTblClick = ( e => {
        debugger;
        console.log(e);
    });

  return (
    <>
      <table id="tblrepos" onClick={handleTblClick}><tbody>
        {args.repos.map((repo) => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.id}</td>
            </tr>
        ))}
      </tbody></table>
    </>
  );
}
