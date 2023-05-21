import { useState } from "react";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { StatusSelect } from "./StatusSelect";
export default function Issues() {
	const [labels, setLabels] = useState([]);
	const [status, setStatus] = useState("");

	function setCurrentLabels(label) {
		setLabels((currentLabels) =>
			currentLabels.includes(label)
				? currentLabels.filter((currentLabel) => currentLabel !== label)
				: currentLabels.concat(label)
		);
	}
	function setCurrentStatus(event) {
		setStatus(event.target.value);
	}
	return (
		<div>
			<main>
				<section>
					<h1>Issues</h1>
					<IssuesList labels={labels} status={status} />
				</section>
				<aside>
					<LabelList selected={labels} toggle={setCurrentLabels} />
					<h3>Status</h3>
					<StatusSelect value={status} onChange={setCurrentStatus} />
				</aside>
			</main>
		</div>
	);
}
