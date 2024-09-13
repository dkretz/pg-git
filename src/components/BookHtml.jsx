export default function BookHtml(args) {
    debugger;
  return (
    <>
      <table><tbody>
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
