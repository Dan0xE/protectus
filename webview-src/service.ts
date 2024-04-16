import {invoke} from '@tauri-apps/api/core';

/** Checks if the Application is protected with VmProtect
 * @returns {Promise<string>} Protection State
 */
export async function checkIfProtected(): Promise<boolean> {
    return await invoke('plugin:protectus|is_protected_command');
}

/** Checks if the Application is running in a Virtual Machine
 * @returns {Promise<boolean>} Running in a Virtual Machine
 */
export async function checkIfVirtualMachine(): Promise<boolean> {
    return await invoke('plugin:protectus|is_virtual_machine_command');
}

/** Checks if a debugger is attached to the Application
 * @param {boolean} checkKernelMode Check for debugger on kernel level
 * @returns {Promise<boolean>} Is Debugger attached
 */
export async function checkIfDebuggerPresent(
    checkKernelMode: boolean
): Promise<boolean> {
    return invoke('plugin:protectus|is_debugger_present_command', {
        checkKernelMode,
    });
}
