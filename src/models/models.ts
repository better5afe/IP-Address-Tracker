export interface Error {
	isError: boolean;
	errorMsg: string;
}

export interface AddressData {
	ipAddress: string;
	location: string;
	timezone: string;
	isp: string;
}