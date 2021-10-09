import { useEffect, useRef, useState } from 'react'
// @ts-ignore
import logo from '../sanserif.png'
import Field from '../src/components/Field'

export default () => {
  const [firstname, setFirstname] = useState('Adonis')
  const [lastname, setLastname] = useState('Karpowicz')
  const [role, setRole] = useState('Graphic Designer & Art Director')
  const [phone, setPhone] = useState('+32 493 16 46 10')

  const signature = useRef(null)
  const [width, setWidth] = useState('')
  const [throttle, setThrottle] = useState(null)

  useEffect(() => setWidth(`${signature.current.offsetWidth}px`), [])

  return (
    <>
      <form
        style={{ userSelect: 'none' }}
        onChange={() => {
          window.clearTimeout(throttle)
          setWidth('auto')
          setThrottle(() => window.setTimeout(
            () => setWidth(`${signature.current.offsetWidth}px`)),
            1000
          )
        }}
      >
        <Field
          name="Prénom"
          value={firstname}
          onChange={({ target }) => setFirstname(target.value)}
        />
        <Field
          name="Nom"
          value={lastname}
          onChange={({ target }) => setLastname(target.value)}
        />
        <Field
          name="Rôle"
          value={role}
          onChange={({ target }) => setRole(target.value)}
        />
        <Field
          name="Téléphone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </form>
      <table
        ref={signature}
        style={{
          backgroundColor: '#EAEAEA',
          minWidth: width
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: '16px' }}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        width="176"
                        src={logo}
                        style={{ display: 'block' }}
                        alt="Sanserif Logo"
                      />
                    </td>
                    <td width="64"></td>
                    <td
                      valign="top"
                      style={{
                        textTransform: 'uppercase'
                      }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td>Digital</td>
                            <td width="32"></td>
                            <td>Collective</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2"></td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>{firstname}</td>
                            <td width="4"></td>
                            <td
                              style={{ textTransform: 'uppercase' }}
                            >
                              {lastname}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2"></td>
                    <td
                      style={{
                        textTransform: 'lowercase',
                        fontStyle: 'italic'
                      }}
                    >
                      {role}
                    </td>
                  </tr>
                  <tr height="16"></tr>
                  <tr>
                    <td colSpan="2">
                      <a
                        href="https://sanserif.be"
                        target="_blank"
                      >
                        sanserif.be
                      </a>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>©</td>
                            <td width="48"></td>
                            <td>
                              <a href={`tel:${phone}`}>{phone}</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          marginTop: '40px',
          userSelect: 'none'
        }}
      >
        <p>Pour ajouter la signature&nbsp;:</p>
        <ol>
          <li>CTRL + A ou CMD + A (Tout sélectionner)</li>
          <li>CTRL + C ou CMD + C (Copier)</li>
          <li>CTRL + V ou CMD + V (Coller dans le client mail)</li>
        </ol>
      </div>
    </>
  )
}
