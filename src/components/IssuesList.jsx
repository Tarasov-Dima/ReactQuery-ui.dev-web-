import { useQuery } from "react-query";
import { IssuesItem } from "./IssuesItem";

export default function IssuesList() {
	const issuesQuery = useQuery(["issues"], fetchData);
	function fetchData() {
		return fetch("/api/issues").then((res) => res.json());
	}
	return (
		<div>
			<h2>Issues List</h2>
			{issuesQuery.isLoading ? (
				<p>...loading</p>
			) : (
				<ul className='issues-list'>
					{issuesQuery.data.map((issue) => (
						<IssuesItem
							key={issue.id}
							title={issue.title}
							number={issue.number}
							assignee={issue.assignee}
							commentCount={issue.comments.length}
							createdBy={issue.createdBy}
							createdDate={issue.createdDate}
							labels={issue.labels}
							status={issue.status}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
