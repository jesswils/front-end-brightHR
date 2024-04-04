import { useState } from 'react';
import { data } from '../data';

const Table = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleFolders = () => {
		setIsVisible((prevState) => !prevState);
	};

	return (
		<section>
			<table className='mx-auto mt-10 text-left bg-slate-800 rounded'>
				<tbody>
					<tr>
						<th className='py-2 px-3'>All documents</th>
					</tr>
					{data.map((document, key) =>
						document.type === 'folder' ? (
							<tr
								key={key}
								className='px-6 py-4 whitespace-nowrap border-b border-neutral-400 rounded hover:cursor-pointer'
								onClick={handleFolders}
							>
								<td className='px-3 py-2 font-bold'>{document.name}</td>
								<td className='px-3 py-2'>
									{isVisible &&
										document.files?.map((file, fileKey) => (
											<span key={fileKey} className='px-4'>
												{file.name}
											</span>
										))}
								</td>
							</tr>
						) : (
							<tr
								key={key}
								className='px-6 py-4 whitespace-nowrap border-b border-neutral-400 rounded'
							>
								<td className='px-3 py-2 font-bold'>{document.name}</td>
								<td className='px-3 py-2'></td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</section>
	);
};

export default Table;
