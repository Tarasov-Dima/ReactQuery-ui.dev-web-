import { useParams } from "react-router-dom";
import { useIssueData, useIssueComments } from "../hooks";
import { IssueHeader } from "./IssueHeader";
import { Comment } from "./Comment";

export default function IssueDetails() {
	const { number } = useParams();
	const issueQuery = useIssueData(number);
	const commentQuery = useIssueComments(number);
	return (
		<div className='issue-details'>
			{issueQuery.isLoading ? (
				<p>Loading ...</p>
			) : (
				<>
					<IssueHeader {...issueQuery.data} />
					<main>
						<section>
							{commentQuery.isLoading ? (
								<p>loading</p>
							) : (
								commentQuery.data?.map((comment) => (
									<Comment key={comment.id} {...comment} />
								))
							)}
						</section>
						<aside></aside>
					</main>
				</>
			)}
		</div>
	);
}
