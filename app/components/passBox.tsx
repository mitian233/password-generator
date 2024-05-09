import {TextField, Select, Flex, Slider, IconButton, Popover} from "@radix-ui/themes";
import {ClipboardCopyIcon, SymbolIcon} from '@radix-ui/react-icons';
import {useState} from 'react';
import CreateOne, {passType, passTypeList} from "~/methods/createOne";

export default function PassBox() {
    const [value, setValue] = useState([15]);
    const handleValueChange = (e: Array<number>) => {
        setValue(e);
        setPassword(CreateOne(passType, e[0]));
    }
    const [passType, setPassType] = useState<passType["value"]>('none');
    const handleSelectorChange = (e: passType["value"]) => {
        setPassType(e);
        setPassword(CreateOne(e, value[0]));
    }
    const [password, setPassword] = useState('');
    const [canCopy, setCanCopy] = useState(false);
    const handleCopy = () => {
        if (password === '') {
            setCanCopy(false);
        } else {
            setCanCopy(true);
            navigator.clipboard.writeText(password);
        }
    }
    return (
        <Flex direction='column' gap='2' width={'100%'}>
            <Select.Root value={passType} onValueChange={handleSelectorChange}>
                <Select.Trigger />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Password Type</Select.Label>
                        {passTypeList.map((item) => (
                            <Select.Item key={item.value} value={item.value}>{item.label}</Select.Item>))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <div className={'flex items-center gap-2'}>
                <p>Length:</p>
                <Slider value={value} onValueChange={handleValueChange} min={1} max={38}/>
                <p>{value[0]}</p>
            </div>

            <TextField.Root size="3" placeholder="Created password" readOnly value={password}>
                <TextField.Slot>
                    <IconButton size="2" variant='ghost' onClick={() => {
                        setPassword(CreateOne(passType, value[0]))
                    }}>
                        <SymbolIcon height='14' width='14'/>
                    </IconButton>
                </TextField.Slot>
                <TextField.Slot>
                    <Popover.Root>
                        <Popover.Trigger>
                            <IconButton size="2" variant="ghost" onClick={handleCopy}>
                                <ClipboardCopyIcon height="14" width="14"/>
                            </IconButton>
                        </Popover.Trigger>
                        <Popover.Content>
                            {canCopy ? (<p>Copied!</p>) : (<p>Empty</p>)}
                        </Popover.Content>
                    </Popover.Root>
                </TextField.Slot>
            </TextField.Root>
        </Flex>
    )
}
