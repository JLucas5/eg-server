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


function getRandom(arr: string[]) {
    if (arr.length === 0) {
      return '[MISSING]';
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

export const getRandomNames = async (req: Request, res: Response) => {
    try { 
        const { type, nameNumber } = req.query;

        let count = typeof nameNumber === 'string' ? parseInt(nameNumber, 10) : 1;
        if (count < 1) count = 1;
        if (count > 10) count = 10;

        const option = nameGenerationOptions.find(opt => opt.value === type);

        if (!option) {
            return res.status(404).json({
                success: false,
                error: `Name type '${type}' not found. Available types: ${nameGenerationOptions.map(opt => opt.value).join(', ')}`
            });
        }

        const nameGroups = option.getGroups();

        const names = new Set<string>();

        while (names.size < count) {
            const parts = nameGroups.map(group => getRandom(group));
            names.add(parts.join(' '));
        }

        res.json({
            success: true,
            data: Array.from(names)
        });
    } catch (error) {
        console.error('Error getting random names:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve random names'
        });
    }
}