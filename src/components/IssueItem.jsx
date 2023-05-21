import { Link } from "react-router-dom";
import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../hooks";
import { Label } from "./Label";
import { statusDoneOrCancelled } from "../helpers/utils";

export function IssueItem(props) {
	const {
		title,
		number,
		assignee,
		commentCount,
		createdBy,
		createdDate,
		labels,
		status,
	} = props;
	const assigneeUser = useUserData(assignee);
	const createdByUser = useUserData(createdBy);
	return (
		<li>
			<div>
				{statusDoneOrCancelled(status) ? (
					<GoIssueClosed style={{ color: "red" }} />
				) : (
					<GoIssueOpened style={{ color: "green" }} />
				)}
			</div>
			<div className='issue-content'>
				<span>
					<Link to={`/issue/${number}`}>{title}</Link>
					{labels.map((label) => (
						<Label key={label} label={label} />
					))}
				</span>
				<small>
					#{number} opened {relativeDate(createdDate)}
					{createdByUser.isSuccess ? `by ${createdByUser.data.name}` : ""}
				</small>
			</div>
			{assignee ? (
				<img
					src={
						assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""
					}
					className='assigned-to'
					alt={assigneeUser.isSuccess ? assigneeUser.data.name : ""}
				/>
			) : null}
			<span className='comment-count'>
				{commentCount > 0 ? (
					<>
						<GoComment />
						{commentCount}
					</>
				) : null}
			</span>
		</li>
	);
}
