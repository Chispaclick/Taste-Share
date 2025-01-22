import React from 'react';
import type { SVGProps } from 'react';

export default function MageMessageRound(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" {...props}><path fill="none" stroke="#cccccc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></path></svg>);
}