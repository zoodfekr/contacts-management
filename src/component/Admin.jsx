import throttle from "lodash.throttle";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import produce from "immer"

const Admin = () => {

	const baseState = [
		{
			title: "Learn TypeScript",
			done: true
		},
		{
			title: "Try Immer",
			done: false
		}
	]

	const nextState = produce(baseState, draft => {
		draft.push({ title: "Tweet about it", done: "null" })
		draft[0].title = "ramin"
		draft[1].done = true
	})


	// console.log("baseState", baseState);

	console.log("nextState", nextState);


	return (
		<div className="container border d-flex flex-column justify-content-center p-2">



		</div>
	)

};
export default Admin;


