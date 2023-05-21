import { useQuery } from "react-query";

export function useUserData(userId) {
	return useQuery(["users", userId], () => {
		return fetch(`/api/users/${userId}`).then((res) => res.json());
	});
}
