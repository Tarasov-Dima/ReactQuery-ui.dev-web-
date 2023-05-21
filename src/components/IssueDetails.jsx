import { useParams } from "react-router-dom";
import { useIssueData } from "../hooks";
export default function IssueDetails() {
	const { number } = useParams();
	const issueQuery = useIssueData(number);
	return <h1>Issue {number}</h1>;
}
