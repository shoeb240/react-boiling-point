export default function temperature({unit, temperature, myChange}) {
    console.log(temperature);
    return (
        <fieldset>
            <legend>{unit.toUpperCase()}</legend>
            <input type="text" value={temperature} onChange={(e) => myChange(e, unit)} />
        </fieldset>
    );
}