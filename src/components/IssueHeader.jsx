import { useUserData } from "../hooks";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { statusDoneOrCancelled } from "../helpers/utils";
import { possibleStatus } from "../helpers/defaultData";
import { relativeDate } from "../helpers/relativeDate";

export const IssueHeader = (props) => {
	const {
		title,
		number,
		status = "todo",
		createdBy,
		createdDate,
		comments,
	} = props;
	const statusObject = possibleStatus.find((pstatus) => pstatus.id === status);
	const createdUser = useUserData(createdBy);
	return (
		<header>
			<h2>
				{title}
				<span> #{number}</span>
			</h2>
			<div>
				<span className={statusDoneOrCancelled(status) ? "closed" : "open"}>
					{statusDoneOrCancelled(status) ? (
						<GoIssueClosed />
					) : (
						<GoIssueOpened />
					)}
					{statusObject.label}
				</span>
				<span className='created-by'>
					{createdUser.isLoading ? " ... " : createdUser.data?.name}
				</span>{" "}
				opened this issue {relativeDate(createdDate)} - {comments.length}{" "}
				comments
			</div>
		</header>
	);
};
