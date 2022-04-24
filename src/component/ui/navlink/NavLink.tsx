
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const dates = ['poliuretano', 'acrilico', 'gloss', 'base', 'protector_de_chasis', 'masilla', 'primer', 'mateante', 'kit']

export const NavLink = () => {

	return (
				<ul>
					<li className="nav-link">
						<Link href="/category/linea_automotiva">
							<a>linea automotiva
							<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
						</Link>
						<div className="dropdown">
						<ul>
              {
                dates.map((data, i) => (
                  <li className="dropdown-link"  key={i}>
    								<Link href={`/category/${data}`}>
    									<a>{data}</a>
    								</Link>
    							</li>
                ))
              }
              </ul>
              </div>
            </li>
							
          <li className="nav-link">
						<Link href="/servicios">
							<a>servicios</a>
						</Link>
          </li>
          <li className="nav-link">
						<Link href="/contacto">
							<a>contacto</a>
						</Link>
          </li>

					
					
				</ul>

	)
};
