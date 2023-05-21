import { useLabelsData } from "../hooks";

export default function LabelList({ selected, toggle }) {
	const labelsQuery = useLabelsData();

	const renderLabels = () => {
		return labelsQuery.data.map((label) => {
			return (
				<li key={label.id}>
					<button
						className={`label ${
							selected.includes(label.id) ? "selected" : ""
						} ${label.color} `}
						onClick={() => toggle(label.id)}
					>
						{label.name}
					</button>
				</li>
			);
		});
	};

	return (
		<div className='labels'>
			<h3>Labels</h3>
			{labelsQuery.isLoading ? <p>loading...</p> : <ul>{renderLabels()}</ul>}
		</div>
	);
}
