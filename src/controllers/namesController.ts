import { Request, Response } from 'express';
import { nameGenerationOptions } from './namesOptions';

export const getNameOptions = async (req: Request, res: Response) => {
    try {
        const options = nameGenerationOptions.map(({ label, value }) => ({
            label,
            value
        }));

        res.json({
            success: true,
            data: options
        });
    } catch (error) {
        console.error('Error getting name options:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve name options'
        });
    }
};

export const getNamesByType = async (req: Request, res: Response) => {
    try {
        const { type } = req.params;
        
        const option = nameGenerationOptions.find(opt => opt.value === type);
        
        if (!option) {
            return res.status(404).json({
                success: false,
                error: `Name group '${type}' not found`
            });
        }

        const names = option.getGroups();

        res.json({
            success: true,
            data: names
        });
    } catch (error) {
        console.error('Error getting names by group:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve names'
        });
    }
}; 