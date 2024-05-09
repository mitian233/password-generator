export const passTypeList: passType[] = [
    {
        value: 'PIN',
        label: 'PIN'
    },
    {
        value: 'none',
        label: 'Default'
    },
    {
        value: 'numberOnly',
        label: 'Have Numbers'
    },
    {
        value: 'symbolsOnly',
        label: 'Have Symbols'
    },
    {
        value: 'symbolsAndNumbers',
        label: 'Symbols and Numbers'
    }
]

export interface passType {
    value: 'none' | 'numberOnly' | 'symbolsOnly' | 'symbolsAndNumbers' | 'PIN';
    label: string;
}
export default function CreateOne(passtype: passType["value"], passLength: number) {
    const noneDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numberOnlyDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersOnlyDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-<>?,.;';
    const charactersAndNumbersDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-<>?,.;';
    let pass = '';
    switch(passtype) {
        case 'PIN':
            for (let i = 0; i < passLength; i++) pass += Math.floor(Math.random() * 10).toString();
            break;
        case 'none':
            for (let i = 0; i < passLength; i++) pass += noneDict.charAt(Math.floor(Math.random() * noneDict.length));
            break;
        case 'numberOnly':
            for (let i = 0; i < passLength; i++) pass += numberOnlyDict.charAt(Math.floor(Math.random() * numberOnlyDict.length));
            break;
        case 'symbolsOnly':
            for (let i = 0; i < passLength; i++) pass += charactersOnlyDict.charAt(Math.floor(Math.random() * charactersOnlyDict.length));
            break;
        case 'symbolsAndNumbers':
            for (let i = 0; i < passLength; i++) pass += charactersAndNumbersDict.charAt(Math.floor(Math.random() * charactersAndNumbersDict.length));
            break;
        default:
            for (let i = 0; i < passLength; i++) pass += noneDict.charAt(Math.floor(Math.random() * noneDict.length));
            break;
    }
    return pass;
}
