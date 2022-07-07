import { Navigate, useParams } from 'react-router-dom';
import styles from './Admin.module.scss';

export default function Admin() {
	const params = useParams();
	if (params.user !== 'adminUser') {
		return <Navigate to="/" />;
	}
	return (
		<>
			<section className={styles.container}>

				<h1>Área restrita!</h1>

				<p>
					Acesso do Administrador para criação, edição e exclusão dos pratos do restaurante. A ser implementado...
				</p>

			</section>
		</>
	);
}