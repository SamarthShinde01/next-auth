import React from "react";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex justify-center items-center h-auto my-10">
			{children}
		</div>
	);
}
