import { useQuery } from "react-query";

export function useLabelsData() {
	return useQuery(["labels"], () => {
		return fetch("api/labels").then((res) => res.json());
	});
}
