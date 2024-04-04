import { data } from '../data';

const Table = () => {
	return (
		<section>
			{data.map((document) => (
				<table>
					<tbody>
						<tr>
							<th>{document.name}</th>
						</tr>
					</tbody>
				</table>
			))}
		</section>
	);
};

export default Table;
