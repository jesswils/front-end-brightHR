import React, { useState } from 'react';
import { data } from '../data';

const Table = () => {
	const [expandedFolder, setExpandedFolder] = useState<string | null>(null);

	const handleFolders = (folderName: string) => {
		setExpandedFolder(
			(prevFolder) => (prevFolder === folderName ? null : folderName) // Toggle the expandedFolder state to either the clicked folder name or null
		);
	};

	return (
		<section>
			<table className='table-fixed w-3/12 mx-auto mt-10 text-left bg-slate-800 rounded text-lg'>
				<tbody>
					<tr>
						<th className='py-3 px-4 border-b border-neutral-400 bg-slate-700'>
							All documents
						</th>
					</tr>
					{data.map((document, key) => (
						<React.Fragment key={key}>
							{document.type === 'folder' && (
								<>
									<tr
										className='px-6 py-4 whitespace-nowrap border-b border-neutral-400 rounded hover:cursor-pointer hover:bg-slate-600'
										onClick={() => handleFolders(document.name)}
									>
										<td className='px-3 py-2 font-bold'>{document.name}</td>
									</tr>
									{expandedFolder === document.name && document.files && (
										<tr>
											<td>
												{document.files.map((file, fileKey) => (
													<p key={fileKey} className='px-6 py-2'>
														{file.name}
													</p>
												))}
											</td>
										</tr>
									)}
								</>
							)}
							{document.type !== 'folder' && (
								<tr className='px-6 py-4 whitespace-nowrap border-b border-neutral-400 rounded'>
									<td className='px-3 py-2 font-bold'>{document.name}</td>
								</tr>
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default Table;
