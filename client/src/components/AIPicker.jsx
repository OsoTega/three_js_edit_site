import React from 'react'
import CustomButton from './CustomButton';
import { aipicker_container, aipicker_textarea } from '../utils/styles'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className={aipicker_container}>
            <textarea
                className={aipicker_textarea}
                placeholder='Text image Generate'
                value={prompt}
                rows={5}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomButton
                        type="outline"
                        title="Generating image"
                        customStyles="text-xs"
                    />
                ) : <>
                    <CustomButton
                        type="outline"
                        title="Generate Logo"
                        handleClick={() => handleSubmit('logo')}
                        customStyles="text-xs"
                    />

                    <CustomButton
                        type="filled"
                        title="Generate Full"
                        handleClick={() => handleSubmit('full')}
                        customStyles="text-xs"
                    />
                </>}
            </div>
        </div>
    )
}

export default AIPicker