import { useState } from 'react';
import Card from './Card';
import '../Form.css'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        color: '',
    });

    const [errors, setErrors] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, color } = formData;
        if (name.trim().length < 3 || name.startsWith(' ')) {
            return 'Por favor chequea que la información sea correcta';
        }
        if (color.length < 6 || !/^#[0-9A-F]{6}$/i.test(color)) {
            return 'Por favor chequea que la información sea correcta';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMessage = validateForm();
        if (errorMessage) {
            setErrors(errorMessage);
            setSubmittedData(null);
        } else {
            setErrors('');
            setSubmittedData(formData);
        }
    };

    return (
        <div className="form-container">
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        id="color"
                        placeholder="Ingresa tu color favorito (formato HEX)"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
            {submittedData && <Card data={submittedData} />}
        </div>
    );
}

export default Form;
