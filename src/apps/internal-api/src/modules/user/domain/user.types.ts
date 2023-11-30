

// common impersonal user for internal app.
// he is owner and additional identifier of created things by himself
export interface User {
	id: number;

	// shared fooddishes by user id
	shared_fd_by_uid: number[];



}

// completely synced user with some other users
export interface CSyncedUser {
	id: number
}
